import React, { FC, useEffect, useState } from "react";
import {
  Img,
  PersonCard,
  Text,
  WrapperPersonCard,
  ModalContainer,
  ModalTitle,
  TextName,
  ModalText,
  ModalImg,
} from "../../otherPages/ourStaff/style";
import { PRIVATE_DATA } from "../privateData";
import axios from "axios";
import { Box, Modal } from "@mui/material";

interface Props {
  counselor: any;
}

const PersonCardComponent: FC<Props> = ({ counselor }) => {
  const [counselorsImg, setCounselorsImg] = useState<any>({});
  const [openModalWindow, setOpenModalWindow] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/${PRIVATE_DATA.spaseID}/assets/${counselor.fields.img.sys.id}?access_token=${PRIVATE_DATA.accessId}`,
      )
      .then((response) => {
        setCounselorsImg([response.data.fields.file.url]);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [counselor]);

  return (
    <>
      <WrapperPersonCard onClick={() => setOpenModalWindow(true)}>
        <PersonCard>
          <Img src={counselorsImg} alt={counselor.fields.firstLastName} />
          <Box height={110}>
            <TextName>{counselor.fields.firstLastName}</TextName>
            <Text>
              {counselor?.fields?.about?.content[0].content[0].value.slice(
                0,
                60,
              )}
              ...
            </Text>
          </Box>
        </PersonCard>
      </WrapperPersonCard>
      <Modal
        open={openModalWindow}
        onClose={() => setOpenModalWindow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Box
            width="100%"
            maxWidth={270}
            height={400}
            borderRadius="15px"
            overflow="hidden"
          >
            <ModalImg
              src={counselorsImg}
              alt={counselor.fields.firstLastName}
            />
          </Box>
          <Box width="100%">
            <ModalTitle>{counselor.fields.firstLastName}</ModalTitle>
            <hr />
            <Box overflow="auto" height="400px">
              {counselor?.fields?.about?.content.map((paragraph, index) => (
                <ModalText key={index}>{paragraph.content[0].value}</ModalText>
              ))}
            </Box>
          </Box>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PersonCardComponent;
