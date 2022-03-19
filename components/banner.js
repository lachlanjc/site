import { Flex, Container, Heading, Badge, Text } from "theme-ui";
import BGImg from "./bg-img";
import Slide from "./slide-up";
import bannerImg from "../public/banner_warm.jpg";

const Banner = ({ children }) => (
  <Flex
    as="header"
    sx={{
      flexDirection: "column",
      color: "white",
      minHeight: "fit-content",
      height: "100vh",
      maxHeight: "768px",
      overflowY: "visible",
      py: [5, 6],
      mb: 0
    }}
  >
    <BGImg
      src={bannerImg}
      alt="Horizontal portrait of Lachlan in a black and white cropped turtleneck laying down looking off camera"
      gradient="to left, rgba(0,0,0,0) 50%, rgba(0,0,0,0.375)"
    />
    <Container
      variant="copyPlus"
      sx={{
        px: [3, 4, 5],
        textShadow:
          "0 1px 2px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.25)",
        ul: {
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
          m: 0
        },
        a: {
          display: "inline-block",
          color: "white",
          transition: "transform .125s ease-in-out",
          ":hover": {
            transform: "scale(1.125) rotate(-4deg)"
          }
        },
        img: { display: "none" },
        footer: { pl: "0 !important" }
      }}
    >
      <Slide>
        <Heading
          as="h1"
          sx={{
            fontFamily: "display",
            fontSize: [6, 7],
            mt: 0,
            mb: 3
          }}
        >
          Hey, I’m
          <br />
          Lachlan Campbell.
        </Heading>
        <Badge
          variant="pill"
          sx={{
            bg: "yellow",
            transform: "rotate(-4deg)",
            fontSize: [3, 4],
            px: 3,
            transition: ".125s ease-in-out",
            transitionProperty: "background-color, transform",
            textShadow: "none",
            ":hover": {
              bg: "primary",
              transform: "scale(1.25) rotate(-356deg)"
            }
          }}
        >
          they/them
        </Badge>
      </Slide>
      <Text
        as="p"
        variant="headline"
        sx={{
          mt: [3, 4, 5],
          mb: [4, 5],
          maxWidth: "30ch",
          lineHeight: "caption",
          fontSize: [3, 4],
          fontWeight: "normal",
          a: { fontWeight: "bold" }
        }}
      >
        I’m a web designer-developer reducing carbon emissions at{" "}
        <a href="https://watershed.com" target="_blank" rel="noreferrer">
          Watershed
        </a>
        . On&nbsp;leave from NYU Interactive Media&nbsp;Arts.
      </Text>
      {children}
    </Container>
  </Flex>
);

export default Banner;
