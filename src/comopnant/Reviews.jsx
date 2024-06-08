import { Box,  Button,  Container, Stack, Typography } from "@mui/material";



function Reviews() {
  return (
    <Container>
      <Box sx={{textAlign:'center', display:'flex', flexWrap:'wrap',  justifyContent:{xs:'center',md:'space-between'},  alignItems:'center', paddingBlock:{xs:'1rem',md:'4rem'},}}>
         <Typography sx={{textTransform:'capitalize' }} variant="h1">new realsed <br /> fishion</Typography>
         <Typography variant="body3">Lorem, ipsum dolor sit amet <br/> consectetur adipisicing elit. 
           Repellat asperiores voluptatibus suscipit <br/> commodi voluptatum magni?</Typography>
           <Button  sx={{ width: "fit-content",backgroundColor:'white',textTransform:'capitalize' }}>get start</Button>

      </Box>
     
<Stack
  direction="row"
  justifyContent='center'
  alignItems="center"
  spacing={2}
  flexWrap={'wrap'}
  p={1}
>

      <Box  p={2}  sx={{overflowX:'hidden'}} >
           <Box p={2}>
            <img src="men-01.jpg" alt="" width={'100%'} />
            </Box>
           <Box sx={{display:'flex',height:{xs:'10rem',md:'13rem'}}}>
            <Box p={1} sx={{display:'flex',height:'100%'}}><img src="men-02.jpg" alt="" /></Box>
            <Box  p={1} sx={{display:'flex',height:'100%'}}><img src="men-03.jpg" alt="" /></Box>
           </Box>
           
      </Box>
      <Box p={2} sx={{overflowX:'hidden'}} >
      <Box sx={{display:'flex',height:{xs:'10rem',md:'13rem'}}}>
            <Box p={1} sx={{display:'flex',height:'100%'}}><img src="women-01.jpg" alt="" /></Box>
            <Box p={1} sx={{display:'flex',height:'100%'}}><img src="women-02.jpg" alt="" /></Box>
        </Box>
        <Box p={2}>

           <Box><img src="women-03.jpg" width={'100%'} alt="" /></Box>
        </Box>
      </Box>

  
     </Stack>
    </Container>
  )
}

export default Reviews