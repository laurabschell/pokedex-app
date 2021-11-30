import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import React from 'react'

const rows = [
    {"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"},
    {"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/"},
    {"name":"flying","url":"https://pokeapi.co/api/v2/type/3/"},
    {"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"},
    {"name":"ground","url":"https://pokeapi.co/api/v2/type/5/"},
    {"name":"rock","url":"https://pokeapi.co/api/v2/type/6/"},
    {"name":"bug","url":"https://pokeapi.co/api/v2/type/7/"},
    {"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/"},
    {"name":"steel","url":"https://pokeapi.co/api/v2/type/9/"}
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
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default PokemonTable
