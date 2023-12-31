"use client"
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loading() {
  return (
    <div className="h-[50vh] flex justify-center items-center">
    <RotatingLines
      strokeColor="#2563eb"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
  )
}

export default Loading