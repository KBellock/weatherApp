'use client'


import { Card, Divider, Subtitle, Text, Title } from '@tremor/react'
import CityPicker from '@/components/CityPicker'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to=[#183B7B] p-10 flex flex-col justify-center items-center">
      <Card>
        <Title className={"text-white text-6xl font-bold text-center bb-10"}>Weather</Title>
        <Subtitle className={"text-xl text-center text-white"}>Powered by OpenAI</Subtitle>

        <Divider className={"my-10"} />

        <Card className= "bg-gradient-to-br from-[#394F68] to=[#183B7B]">
          <CityPicker />
        </Card>
      </Card>


    </div>
  )
}
