import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PokemonTableRow from './PokemonTableRow/PokemonTableRow'
import { getPokemonTypes } from '../../features/PokemonTypes/PokemonTypesSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

// const rows = [
//     {"name":"normal","url":"https://pokeapi.co/api/v2/type/1/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"fighting","url":"https://pokeapi.co/api/v2/type/2/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"flying","url":"https://pokeapi.co/api/v2/type/3/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"poison","url":"https://pokeapi.co/api/v2/type/4/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"ground","url":"https://pokeapi.co/api/v2/type/5/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"rock","url":"https://pokeapi.co/api/v2/type/6/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"bug","url":"https://pokeapi.co/api/v2/type/7/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"ghost","url":"https://pokeapi.co/api/v2/type/8/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]},
//     {"name":"steel","url":"https://pokeapi.co/api/v2/type/9/", details: [ {name: "lolo", number: 21, algoMas: "34 ms"}]}
// ]

const PokemonTable = () => {

    const dispatch = useDispatch()
    const { pokemonTypes } = useSelector((state) => state.pokemonTypes)

    useEffect(() => {
        dispatch(getPokemonTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            {pokemonTypes.map((type) => (
                <PokemonTableRow key={type.name} row={type} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

export default PokemonTable
