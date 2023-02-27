import { Carousel } from 'react-carousel-minimal';

function Slider() {
  const data = [
    {
      image: "https://w0.peakpx.com/wallpaper/450/1018/HD-wallpaper-movie-big-hero-6-baymax-hiro-hamada.jpg",
      caption: "satu"
    },
    {
      image: "https://w0.peakpx.com/wallpaper/450/1018/HD-wallpaper-movie-big-hero-6-baymax-hiro-hamada.jpg",
      caption: "dua"
    },
    {
      image: "https://https://wallpaper.dog/large/976569.png.tripoto.com/media/filter/tst/img/735873/TripDocument/https://i.pinimg.com/236x/c1/e3/12/c1e3123ad885fcf8156e912670510950.jpg.jpg",
      caption: "Tiga"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
          <Carousel
            data={data}
            time={10000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            radius="5px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              
            }}
          />
        </div>
  )
}
export default Slider