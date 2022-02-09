import Head from 'next/head'

const IndexPage = () => {
  return (
      <Head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>jua's Portfolio</title>
          {/* <!-- add icon link --> */}
          <link rel = "icon" href = 
          "img/eth-logo-200x.png" 
                  type = "image/x-icon"/>
          <link rel="stylesheet" href="tailwind.css"/>
          
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
          

      </Head>
  )
}

export default IndexPage