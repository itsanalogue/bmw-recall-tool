import React from 'react'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
};
export const MainLayout: React.FC<Props> = props => {
  return (
    <div className='container'>
      <Head>
        <title>BMW Recall Details Tool</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
              rel='stylesheet'
              integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
              crossOrigin='anonymous' />
      </Head>

      <div className='row'>
        <div className='col-12'>
          <h1>BMW Recall Info Tool</h1>

          {props.children}

          <div className='pt-5'>
            <small>Source code of the tool on GitHub: <a href='https://github.com/Alex-Bond/bmw-recall-tool'
                                                         target='_blank'
                                                         rel='noreferrer'
            >https://github.com/Alex-Bond/bmw-recall-tool</a></small>
          </div>
        </div>
      </div>

    </div>
  )
}
