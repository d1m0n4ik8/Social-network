import imgSrc from './some_say.png'
import imgSrc2 from './monster.png'
import imgSrc3 from './odds_are.jpg'
import imgSrc4 from './hate_me.jpg'
import some_say from './some_say.mp3'
import monster from './monster.mp3'
import odds_are from './odds_are.mp3'
import hate_me from './hate_me.mp3'

// All of these artists are at https://pixabay.com/music/search/mood/laid%20back/
const musics = [
   {
      id: 0,
      title: 'Some say',
      artist: 'Nea',
      audioSrc: some_say,
      image: imgSrc,
      color: '#00aeb0',
   },
   {
      id: 1,
      title: 'Monster',
      artist: 'Skillets',
      audioSrc: monster,
      image: imgSrc2,
      color: '#ffb77a',
   },
   {
      id: 2,
      title: 'Odds are',
      artist: 'Barenaked Ladies',
      audioSrc: odds_are,
      image: imgSrc3,
      color: '#5f9fff',
   },
   {
      id: 3,
      title: 'Hate me',
      artist: 'Ellie Goulding',
      audioSrc: hate_me,
      image: imgSrc4,
      color: '#5f9fff',
   },
]
export default musics
