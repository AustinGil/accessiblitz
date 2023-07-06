import { Header, Card, Radio, Checkbox, Dialog, Heading } from './components/index.js'
import './App.css'

function jsSearch(event) {
  if (event.keyCode === 13 && event.target.value) {
    alert(`You searched for ${event.target.value}`)
    event.target.value = ""
  }
}
function setRating(value) {
  alert(`You left a ${value} start review`)
}

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <h1>Accessible Design Patterns</h1>

        <div className="section">
          <div className='search-form flex'>
            <div className='search-wrapper'>
              <input type="text" placeholder="Type text and press Enter" onKeyDown={jsSearch} />
              <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
            </div>
            <div className="custom-radios">
              {Array.from({ length: 3 }).map((_, i) => (
                <Radio key={i}>Option {i + 1}</Radio>
              ))}
            </div>
            <div className="custom-checkboxes">
              {Array.from({ length: 3 }).map((_, i) => (
                <Checkbox key={i}>Option {i + 1}</Checkbox>
              ))}
            </div>
            <div className='switch-wrapper'>
              Do the thing:
              <div className="switch" onClick={event => {
                // @ts-ignore
                event.target.classList.toggle("active")
              }}></div>
            </div>
          </div>

          <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} img="https://picsum.photos/200/300/?random">
                <h3>Post title</h3>
                <p>Corpus callosum a very small stage in a vast cosmic arena across the centuries quis nostrum exercitationem...</p>
                <a href="/post">Read More</a>
              </Card>
            ))}
          </div>
        </div>

        <div className="section">
          <p>Across the centuries tendrils of gossamer clouds concept of the number one, Hypatia. Rig Veda. Science bits of moving fluff, white dwarf trillion, venture dream of the mind's eye.</p>

          <p>Small, important text</p>

          <p>take root and flourish dream of the mind's eye venture Cambrian explosion rich in heavy atoms sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

          <Heading size="lg">Don't you just love sparkles?</Heading>

          <p>Ut enim ad minima veniam stirred by starlight, realm of the galaxies, brain is the seed of intelligence. Galaxies a very small stage in a vast cosmic arena a mote of dust suspended in a sunbeam nisi ut aliquid ex ea commodi consequatur?</p>
        </div>

        <Dialog toggle="Leave a review">
          <span onClick={() => setRating(1)}>😠</span>
          <span onClick={() => setRating(2)}>😒</span>
          <span onClick={() => setRating(3)}>😐</span>
          <span onClick={() => setRating(4)}>😊</span>
          <span onClick={() => setRating(5)}>😁</span>
        </Dialog>
      </div>

      <div className="footer">
        <div className="social">
          <a href="https://twitter.com/heyAustinGil" target="_blank" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 448">
              <path d="M405 102c-11 16-24.75 30.25-40.5 41.75.25 3.5.25 7 .25 10.5C364.75 261 283.5 384 135 384c-45.75 0-88.25-13.25-124-36.25 6.5.75 12.75 1 19.5 1 37.75 0 72.5-12.75 100.25-34.5-35.5-.75-65.25-24-75.5-56 5 .75 10 1.25 15.25 1.25 7.25 0 14.5-1 21.25-2.75-37-7.5-64.75-40-64.75-79.25v-1c10.75 6 23.25 9.75 36.5 10.25-21.75-14.5-36-39.25-36-67.25 0-15 4-28.75 11-40.75 39.75 49 99.5 81 166.5 84.5-1.25-6-2-12.25-2-18.5 0-44.5 36-80.75 80.75-80.75 23.25 0 44.25 9.75 59 25.5C361 86 378.5 79.25 394 70c-6 18.75-18.75 34.5-35.5 44.5 16.25-1.75 32-6.25 46.5-12.5z" />
            </svg>
          </a>

          <a href="https://github.com/AustinGil" target="_blank" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 448">
              <path d="M192 32c106 0 192 86 192 192 0 84.75-55 156.75-131.25 182.25C243 408 239.5 402 239.5 397c0-6.25.25-27 .25-52.75 0-18-6-29.5-13-35.5 42.75-4.75 87.75-21 87.75-94.75 0-21-7.5-38-19.75-51.5 2-5 8.5-24.5-2-51-16-5-52.75 19.75-52.75 19.75-15.25-4.25-31.75-6.5-48-6.5s-32.75 2.25-48 6.5c0 0-36.75-24.75-52.75-19.75-10.5 26.5-4 46-2 51C77 176 69.5 193 69.5 214c0 73.5 44.75 90 87.5 94.75-5.5 5-10.5 13.5-12.25 25.75-11 5-39 13.5-55.75-16-10.5-18.25-29.5-19.75-29.5-19.75-18.75-.25-1.25 11.75-1.25 11.75 12.5 5.75 21.25 28 21.25 28 11.25 34.25 64.75 22.75 64.75 22.75 0 16 .25 31 .25 35.75 0 5-3.5 11-13.25 9.25C55 380.75 0 308.75 0 224 0 118 86 32 192 32zM72.75 307.75c.5-1-.25-2.25-1.75-3-1.5-.5-2.75-.25-3.25.5-.5 1 .25 2.25 1.75 3 1.25.75 2.75.5 3.25-.5zm7.75 8.5c1-.75.75-2.5-.5-4-1.25-1.25-3-1.75-4-.75-1 .75-.75 2.5.5 4 1.25 1.25 3 1.75 4 .75zM88 327.5c1.25-1 1.25-3 0-4.75-1-1.75-3-2.5-4.25-1.5-1.25.75-1.25 2.75 0 4.5s3.25 2.5 4.25 1.75zM98.5 338c1-1 .5-3.25-1-4.75-1.75-1.75-4-2-5-.75-1.25 1-.75 3.25 1 4.75 1.75 1.75 4 2 5 .75zm14.25 6.25c.5-1.5-1-3.25-3.25-4-2-.5-4.25.25-4.75 1.75s1 3.25 3.25 3.75c2 .75 4.25 0 4.75-1.5zm15.75 1.25c0-1.75-2-3-4.25-2.75-2.25 0-4 1.25-4 2.75 0 1.75 1.75 3 4.25 2.75 2.25 0 4-1.25 4-2.75zM143 343c-.25-1.5-2.25-2.5-4.5-2.25-2.25.5-3.75 2-3.5 3.75.25 1.5 2.25 2.5 4.5 2s3.75-2 3.5-3.5z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/austingil/" target="_blank" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 448">
              <path d="M87.25 156.25V404H4.75V156.25h82.5zm5.25-76.5c.25 23.75-17.75 42.75-46.5 42.75h-.5c-27.75 0-45.5-19-45.5-42.75C0 55.5 18.5 37 46.5 37c28.25 0 45.75 18.5 46 42.75zM384 262v142h-82.25V271.5c0-33.25-12-56-41.75-56-22.75 0-36.25 15.25-42.25 30-2 5.5-2.75 12.75-2.75 20.25V404h-82.25c1-224.5 0-247.75 0-247.75H215v36h-.5c10.75-17 30.25-41.75 74.75-41.75C343.5 150.5 384 186 384 262z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
