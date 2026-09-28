import React from 'react'
import Card from './Card'
import Greeting from './Greeting'

function App() {
  return (
    <>
    <div>
        <Card name="car1" price="2342" img="https://www.kbb.com/wp-content/uploads/2025/02/2025-chevrolet-corvette-zr1-coupe-front-right.jpg?quality=75&strip=all"/>
        <Card name="car2" price="3453" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSq1XDRcJPajvAfuCw-Ned-2IIZxiMs3qIzpny5ZLLl_qihb8kr0jm2YuM&s=10"/>
        <Card name="car3" price=" 5345" img= "https://www.topgear.com/sites/default/files/news-listicle/image/2021/12/18.%20Koenigsegg%20Jesko.jpg?w=424&h=239"/>
    </div>

    <Greeting txt="hello my name is nika"/>
    </>
  )
}

export default App



