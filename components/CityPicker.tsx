'use client'

import React from 'react'
import { Country, City } from 'country-state-city'
import Select from 'react-select'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GlobeAltIcon } from '@heroicons/react/24/solid'

type option = {
    value: {
        latitude: string;
        longitude: string;
        isoCode: string;
    },
    label: string;
} | null;

type cityOption = {
    value: {
        latitude: string;
        longitude: string;
        countryCode: string;
        name: string;
        stateCode: string;
    },
    label: string;
} | null;

const options = Country.getAllCountries().map((country) => {
  return {
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
  }})




function CityPicker(props: any) {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
    const [selectedCity, setSelectedCity] = useState<cityOption>(null)
    const router = useRouter()

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option)
        setSelectedCity(null)
    }

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option)
        router.push(`/location/${option?.value.latitude}/${option?.value.longitude}`)
    }

  return (
    <div className="space-y-2">
        <div className="space-y-2">
            <div className="flex items-center text-center">
                <GlobeAltIcon className="text-white h-6 w-6" />
                <label className="text-white p-2" htmlFor="country">Country</label>
            </div>
            <Select className="text-black" value={selectedCountry} onChange={handleSelectedCountry} options={options}/>
      </div>
 {selectedCountry && (
      <div className="space-y-2">
            <div className="flex items-center text-center">
                <GlobeAltIcon className="text-white h-6 w-6" />
                <label className="text-white p-2" htmlFor="city">City</label>
            </div>
            <Select className="text-black" value={selectedCity} onChange={handleSelectedCity} options={
                City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((state) => {
                    return {
                        value: {
                            latitude: state.latitude,
                            longitude: state.longitude,
                            countryCode: state.countryCode,
                            name: state.name,
                            stateCode: state.stateCode,
                        },
                        label: state.name,
                      }
                })
            }/>
      </div>
)}
    </div>
  )
}

export default CityPicker
