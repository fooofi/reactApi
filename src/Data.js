import React, {useState, useEffect} from 'react';

function Data(){
  const url = 'https://www.telemercados.cl/api/catalog_system/pub/products/search?fq=C:349&_from=1&_to=49'
  const [data, setData] = useState()
  
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setData(responseJSON)
  }
  useEffect(() =>{
    fetchApi()
  }, [])

  const group = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        [item.productName, item.brand, item.link]
      ],
    }), 
    {},
  );

if(data){
  const brand = group(data, 'brand')
  for (let i in brand){
    brand[i].unshift('totalProducts: '+brand[i].length)
  }
  console.log(brand)
}

  return(
    <div>
      <h1>HolaMundo</h1>
      <p>En la consola se encuentra la data</p>
    </div>
  )
}

export default Data;