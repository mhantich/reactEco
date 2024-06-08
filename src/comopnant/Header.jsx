
import { Box, Button, Typography, styled } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {

  const FlexBetween = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const pages = ["Home", "Products", "About", "Reviews"];

  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: "0%",
          right: "0%",
          left: "0",
          bottom: "0%",
          paddingInline: "30px",
          height:"10vh",
          backdropFilter: "blur(16px) saturate(180%)",
          webkitBackdropFilter:" blur(16px) saturate(180%)",
          backgroundColor: 'rgba(19, 19, 20, 0.75',
   
          border: '1px solid rgba(255, 255, 255, 0.125)',
          color:'white',
          zIndex:'1'
        }}
      >
        <FlexBetween>
          <Typography variant="h2" sx={{ fontWeight: "bold" }} component={"h1"}>
           TUX=DO
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant=""
                sx={{
                  my: 2,
                  display: "block",
                
                  fontWeight: 500
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Button startIcon={<PersonSearchIcon />}></Button>
            <Button
              sx={{
                my: 2,
           
            
             
              }}
              startIcon={<ShoppingCartIcon />}
            ></Button>
          </Box>
        </FlexBetween>
      </header>
    </div>
  );
}

export default Header;
