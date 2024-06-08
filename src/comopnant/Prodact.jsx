import { Box, Button, Container, Grid, Typography } from "@mui/material";

function Prodact() {
  return (
    <Container>
      <Grid
      container spacing={2} alignItems={'center'}
      >
        <Grid item xs={12} md={6}  >
          <img
            src="discount.jpg"
            style={{ backgroundSize: "cover", height: "auto", width: "100%" }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
        <Typography sx={{ fontWeight: "bold",textTransform:'capitalize' }} variant="h1">
          best look anywhere
        </Typography>
        
      </Grid>
      </Grid>



      <Grid
      container p={2} spacing={2} alignItems={'center'} justifyContent={'space-between'}
      >
        <Grid sx={{display:'flex',justifyContent:'space-between'}} item xs={12} md={6}  >
          <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
          <Button sx={{textTransform:'capitalize',backgroundColor:'white'}}>explor more</Button>
          </Box>
        
<Box sx={{display:{xs:'none',md:'block'}}}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_231_82)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0C0 55.2285 44.7715 100 100 100C44.7715 100 0 144.772 0 200H12C12 151.399 51.3989 112 100 112C148.601 112 188 151.399 188 200H200C200 144.772 155.228 100 100 100C155.228 100 200 55.2285 200 0H188C188 48.6011 148.601 88 100 88C51.3989 88 12 48.6011 12 0H0ZM24 0C24 41.9736 58.0264 76 100 76C141.974 76 176 41.9736 176 0H164C164 35.3462 135.346 64 100 64C64.6538 64 36 35.3462 36 0H24ZM48 0C48 28.7188 71.2812 52 100 52C128.719 52 152 28.7188 152 0H140C140 22.0914 122.091 40 100 40C77.9086 40 60 22.0914 60 0H48ZM100 124C141.974 124 176 158.026 176 200H164C164 164.654 135.346 136 100 136C64.6538 136 36 164.654 36 200H24C24 158.026 58.0264 124 100 124ZM100 148C128.719 148 152 171.281 152 200H140C140 177.909 122.091 160 100 160C77.9086 160 60 177.909 60 200H48C48 171.281 71.2812 148 100 148Z"
              fill="url(#paint0_linear_231_82)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_231_82"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#A7B5FF" />{" "}
              <stop offset="1" stopColor="#F3ACFF" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_231_82">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
        </Box>
        </Grid>

        <Grid item xs={12} md={6}  >
          <img
            src="category-5.jpg"
            style={{ backgroundSize: "cover", height: "auto", width: "100%" }}
          />
        </Grid>
      </Grid>



      <Grid
      container p={2} spacing={2} alignItems={'center'}
      >
        <Grid item xs={12} md={6}  >
          <img
            src="category-2.jpg"
            style={{ backgroundSize: "cover", height: "auto", width: "100%" }}
          />
        </Grid>
        <Grid   item xs={12} md={6}  >
        <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
        <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat itaque ea in dolore vitae nesciunt optio tempora, nemo exercitationem quasi, quibusdam ducimus! Minima voluptatibus voluptatum suscipit alias. Distinctio, libero maxime.</Typography>
        <Button sx={{textTransform:'capitalize',backgroundColor:'white'}}>explor more</Button>
        </Box>
        </Grid>
    
      </Grid>
    </Container>
  );
}

export default Prodact;

{
  /* <Box sx={{ position: "absolute", top: "0", right: "0" }}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_116_153)">
              {" "}
              <path
                d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                fill="url(#paint0_linear_116_153)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_116_153"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#FF7F11" />{" "}
                <stop offset="1" stopColor="#ffffff" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_116_153">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>{" "}
        </Box> */
}
