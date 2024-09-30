'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Thermometer, Sun, Snowflake } from 'lucide-react'

interface WeatherCardProps {
  temperature: number
  location: string
}

export function WeatherCardComponent({
  temperature,
  location,
}: WeatherCardProps) {
  const isHot = temperature > 20 // Assuming temperatures above 20°C are considered hot

  return (
    <Card className="w-64 h-64 bg-gradient-to-br from-sky-400 to-teal-300">
      <CardContent className="flex flex-col items-center justify-center h-full p-6 text-white">
        <h2 className="text-xl font-bold mb-2">{location.toUpperCase()}</h2>
        <div className="text-6xl font-bold mb-4 flex items-center">
          {temperature > 0 ? null : '-'}
          {temperature}°
        </div>
        {isHot ? (
          <Sun className="w-12 h-12" />
        ) : (
          <Snowflake className="w-12 h-12" />
        )}
        <Thermometer className="w-6 h-6 mt-4" />
      </CardContent>
    </Card>
  )
}
