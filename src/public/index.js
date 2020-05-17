(async () => {
  const coinsRes = await fetch('https://api.coingecko.com/api/v3/coins/list')
  const coinsResJson = await coinsRes.json()
  const data = coinsResJson.slice(200,230)
  const sendData = document.querySelector('.data')

  data.forEach(async coinElement => {

    try {
      const coinsPrice = await fetch(`https://api.coingecko.com/api/v3/coins/${coinElement.id}`)
      const coinsPriceJson = await coinsPrice.json()
      //console.log(coinsPriceJson.image.small)
      sendData.innerHTML += 
      `
        <tr>         
          <td><img src=${coinsPriceJson.image.small}></td>
          <td>${coinElement.id}</td>
          <td>${coinElement.name}</td>
          <td>${coinElement.symbol}</td>
          <td>$${coinsPriceJson.market_data.current_price.usd}</td>
        </tr>
      `
    } catch (error) {
      console.log(error)
    }
  });
})();


