import React from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TBody from '@material-ui/core/TableBody'
import TD from '@material-ui/core/TableCell'
import TFooter from '@material-ui/core/TableFooter'
import THead from '@material-ui/core/TableHead'
import TPagination from '@material-ui/core/TablePagination'
import TR from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

export default function ({summaryData}) {
  const [page, setPage] = React.useState(0)
  const [rowsPP, serRowsPP] = React.useState(5)
  
  function handlePageChange(e,v) {
    setPage(v)
  }
  function handleRowsPPChange(e) {
    serRowsPP(+e.target.value)
  }
  return (
    <Paper elevation={4}>
      <Typography variant={'h3'}>Transacciones</Typography>
      <Typography variant={'h2'}>Movimientos</Typography>
      <Table>
        <THead>
          <TR>
            <TD>Cantidad</TD><TD>Concepto</TD><TD>Fecha</TD>
          </TR>
        </THead>
        <TBody>
          {summaryData.map((item, index) => {
            return (
              <TR key={index}>
                <TD>{item.value}</TD>
                <TD>{item.externalID}</TD>
                <TD>{item.createdAt.substr(0, 10)}</TD>
              </TR>
            )
          })
          }
        </TBody>
        <TFooter>
          <TPagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={summaryData.length}
            rowsPerPage={rowsPP}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handleRowsPPChange}
          />
        </TFooter>
      </Table>
    </Paper>
  )
}
