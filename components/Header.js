import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        MY TODOS
                    </div>

                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={'/my-todos'} class="mr-5 hover:text-gray-900">MY TODOS</Link>
                        <Link href={'/'} class="mr-5 hover:text-gray-900">HOME</Link>
                        <Link href={'/'} class="mr-5 hover:text-gray-900">ABOUT</Link>
                        <Link href={'/'} class="mr-5 hover:text-gray-900">FEEDBACK</Link>
                    </nav>

                </div>
            </header>
        </div>
    )
}
export default Header