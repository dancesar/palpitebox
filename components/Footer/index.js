import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='conatiner mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:{' '} Danillo Carvalho / {' '}
                                        <a className='hover:underline' href='https://www.linkedin.com/in/danillo-c%C3%A9sar-33133914/'>Linkedin</a> / {' '}
                                        <a className='hover:underline' href='https://github.com/dancesar'>Github</a>
                <div className='mt-2'>
                    <img className='inline p-4' src='./logo_semana_fsm.png' />
                    <img className='inline p-4' src='./logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer