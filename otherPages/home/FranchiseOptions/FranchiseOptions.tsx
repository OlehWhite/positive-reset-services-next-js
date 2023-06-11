import {
  Container,
  Title,
  Text,
  Label,
  Wrapper,
  Rating,
  TextRating,
} from "./styled";
import { LinearProgressWithLabel } from "../../../components/LinearProgressWithLabel/LinearProgressWithLabel";
import IGMLabel from "../../../public/signature-white-img.png";
import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import IMGLogo from "../../../public/gLLTpCpk.png";
import { PRIVATE_DATA } from "../../privateData";

const ID = "homeRating";

export const FranchiseOptions: FC = () => {
  const [rating, setRating] = useState<any>([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/entries?content_type=${ID}&access_token=${PRIVATE_DATA.accessId}`
      )
      .then((response) => {
        setRating(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <Container style={{ backgroundImage: `url(${IMGLogo.src})` }}>
      <Wrapper>
        <Box style={{ width: "100%", maxWidth: 500 }}>
          <Title>THE ‘MENTAL HEALTH’ FRANCHISE IS BEYOND SUCCESSFUL.</Title>
          <Text>
            ‘Mental Health’ franchising allows to branch out and grow while
            giving people the opportunity to run their own business with the
            help and support of a larger company that has a proven formula for
            success.
          </Text>
          <Label>
            <Image src={IGMLabel} alt="Signature" title="Signature" />
          </Label>
        </Box>
        <Box>
          {rating.length > 0 &&
            rating.map((rating: any, index: number) => (
              <Rating key={index}>
                <TextRating>
                  {rating.fields.title.content[0].content[0].value}
                </TextRating>
                <LinearProgressWithLabel
                  value={Number(
                    rating.fields.number.content[0].content[0].value
                  )}
                />
              </Rating>
            ))}
        </Box>
      </Wrapper>
    </Container>
  );
};
