import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md max-w-md">
        <ul className="divide-y divide-gray-200">
          <li>
            <Link to='/about/arpita' className="block hover:bg-gray-50 p-4 transition duration-150 ease-in-out">
              <div className="flex items-center">
                <div className="text-sm font-medium text-indigo-600 truncate">
                  View Profile: Arpita
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About;
