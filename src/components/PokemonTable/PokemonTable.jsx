import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PokemonTableRow from './PokemonTableRow/PokemonTableRow'

const rows = [
    {"name":"normal","url":"https://pokeapi.co/api/v2/type/1/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"flying","url":"https://pokeapi.co/api/v2/type/3/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"poison","url":"https://pokeapi.co/api/v2/type/4/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"ground","url":"https://pokeapi.co/api/v2/type/5/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"rock","url":"https://pokeapi.co/api/v2/type/6/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"bug","url":"https://pokeapi.co/api/v2/type/7/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
    {"name":"steel","url":"https://pokeapi.co/api/v2/type/9/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]}
]

const PokemonTable = () => {
    return (
        <TableContainer sx={{ width: '85%', margin: '1rem auto'}} component={Paper}>
            <Toolbar sx={{ pl: '2', pr: '1'}}>
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                    >
                    Types of Pókemon
                </Typography>

            </Toolbar>
            <Table aria-label="collapsible table">
            <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>Type</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <PokemonTableRow key={row.name} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default PokemonTable
