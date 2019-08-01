import React from 'react'

import Box from '@material-ui/core/Box'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts"
import withStyles from '@material-ui/styles/withStyles'

const ChartBox = withStyles({
  root: {
    width: 815,
    height: 327,
    margin: '100px auto 0',
    padding: '20px 0',
    position: 'relative'
  }
})(Box)

export default function ({chartData}) {
  console.log(chartData)
  return (
    <ChartBox>
      <ResponsiveContainer>
        <LineChart
          width={700}
          height={252}
          data={chartData}
          margin={{top: 15, right: 20, left: 20, bottom: 15}}
        >
          <XAxis dataKey="name" tick={{fontSize: 20}} tickCount={0} axisLine={false} tickMargin={5}/>
          <YAxis tick={{fontSize: 20}}/>
          <CartesianGrid horizontal={false} stroke="#f5f5f5"/>
          <Tooltip/>
          <Legend margin={{top: 15, right: 0, left: 0, bottom: 0}}/>
          <Line type="monotone" dataKey="tokens" stroke="#FF6633"/>
        </LineChart>
      </ResponsiveContainer>
    </ChartBox>
  )
}
