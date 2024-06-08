import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

function Thoughts() {
  return (
    <Container sx={{ position: "relative",paddingBlock:'4rem' }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        what our customer <br /> say about us
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center",flexWrap:'wrap', gap: 3,paddingBlock:'5rem' }}>
        <Card
          sx={{
            width: 320,
            maxWidth: "100%",
            boxShadow: "lg",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              level="body-sm"
              sx={{ maxWidth: "24ch", color: "#0C0C0C" }}
            >
              Hello, this is my bio and I am a PRO member of MUI. I am a
              developer and I love to code.
            </Typography>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Avatar
                variant="square"
                src="banner1.jpg"
                sx={{ "--Avatar-size": "12rem" }}
              />
              <Typography sx={{ color: "#0C0C0C" }} level="title-lg">
                Josephine Blanton
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 320,
            maxWidth: "100%",
            boxShadow: "lg",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              level="body-sm"
              sx={{ maxWidth: "24ch", color: "#0C0C0C" }}
            >
              Hello, this is my bio and I am a PRO member of MUI. I am a
              developer and I love to code.
            </Typography>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Avatar
                variant="square"
                src="banner1.jpg"
                sx={{ "--Avatar-size": "12rem" }}
              />
              <Typography sx={{ color: "#0C0C0C" }} level="title-lg">
                Josephine Blanton
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: 320,
            maxWidth: "100%",
            boxShadow: "lg",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              level="body-sm"
              sx={{ maxWidth: "24ch", color: "#0C0C0C" }}
            >
              Hello, this is my bio and I am a PRO member of MUI. I am a
              developer and I love to code.
            </Typography>
            <Box
              sx={{
                padding: "1rem",
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Avatar
                variant="square"
                src="banner1.jpg"
                sx={{ "--Avatar-size": "12rem" }}
              />
              <Typography sx={{ color: "#0C0C0C" }} level="title-lg">
                Josephine Blanton
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          gap: 3,
          justifyContent: "center",
          padding: "2rem",
          position: "relative",
          flexWrap:'wrap'
        }}
      >
        <Box>
          {" "}
          <Avatar src="banner2.jpg" sx={{ width: "6rem", height: "6rem" }} />
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:2,alignItems:'center'}}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            get more out og your <br /> systems & people
          </Typography>
          <Typography
            variant="body2"
            sx={{ textTransform: "capitalize", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum
            corrupti <br /> incidunt inventore reprehenderit aut?
          </Typography>
          <Button  sx={{ width: "fit-content",backgroundColor:'white',textTransform:'capitalize' }}>get start</Button>
        </Box>

        <Box>
          {" "}
          <Avatar src="banner1.jpg" sx={{ width: "3rem", height: "3rem" }} />
          <Avatar src="banner3.jpg" sx={{ width: "9rem", height: "9rem" }} />
        </Box>
      </Box>
      <Box sx={{ position: "absolute", right: "0%", top: "0%" }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_118_195)">
            {" "}
            <path
              d="M100 0L101.459 91.7276L134.202 6.03074L104.2 92.7254L164.279 23.3956L106.435 94.6006L186.603 50L107.893 97.127L198.481 82.6352L108.4 100L198.481 117.365L107.893 102.873L186.603 150L106.435 105.399L164.279 176.604L104.2 107.275L134.202 193.969L101.459 108.272L100 200L98.5414 108.272L65.798 193.969L95.8 107.275L35.7212 176.604L93.5652 105.399L13.3975 150L92.1066 102.873L1.51923 117.365L91.6 100L1.51923 82.6352L92.1066 97.127L13.3975 50L93.5652 94.6006L35.7212 23.3956L95.8 92.7254L65.798 6.03074L98.5414 91.7276L100 0Z"
              fill="url(#paint0_linear_118_195)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_118_195"
              x1="157.5"
              y1="32"
              x2="44"
              y2="147.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop offset="0.0509862" stopColor="#FFB6E1" />{" "}
              <stop offset="1" stopColor="#FBE3EA" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_118_195">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </Box>
      <Box sx={{ position: "absolute", left: "0%", bottom: "0%" }}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_105_296)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M200 98.5234C196.477 99.4861 192.769 100 188.941 100H144.233C121.117 100 102.378 118.739 102.378 141.854V191.319C102.378 194.295 102.067 197.199 101.477 200C100.514 196.477 100 192.769 100 188.941V144.233C100 121.117 81.2612 102.378 58.1456 102.378H8.68122C5.70469 102.378 2.80073 102.067 0 101.477C3.52289 100.514 7.23105 100 11.0593 100H55.7675C78.8831 100 97.622 81.2611 97.622 58.1456L97.622 8.68118C97.622 5.70466 97.9327 2.80071 98.5234 0C99.4861 3.5229 100 7.23107 100 11.0593V55.7675C100 78.8831 118.739 97.622 141.855 97.622H191.319C194.295 97.622 197.199 97.9327 200 98.5234Z"
              fill="url(#paint0_linear_105_296)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_105_296"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#DF99F7" />{" "}
              <stop offset="1" stopColor="#FFDBB0" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_105_296">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </Box>
    </Container>
  );
}

export default Thoughts;
