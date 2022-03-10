export const Back=()=> {
    return <div className='Back'>
    <div className='ladoEsquerdo'>
      <h1>wellcome to Pampi.</h1>
    
      <a>Pampo is a flashcard site for you</a>
      <a>to study and memorize your studies.</a>

      <div className='buttonsLeft'>
        <button className='left'>create new deck.</button>
        <button className='left'>create loose cards.</button>
        <button className='left'>add new cards to deck.</button>
      </div>
    </div>

    <div className='center'></div>

    <div className='ladoDireito'>
      <button className='loose'>study loose cards.</button>
      <h3>yours decks:</h3>
      <div className='buttonsRight'>
        <button className='decks'>deck1</button>
        <button className='decks'>deck2</button>
      </div>          
    </div>
  </div>
}