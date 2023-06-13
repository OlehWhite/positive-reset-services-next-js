import { OtherHeader } from "../components/Layout/OtherHeader/OtherHeader";

const Error = () => {
  return (
    <>
      <OtherHeader />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "rgba(57,138,243,0.98)",
          fontSize: 50,
          height: "12vh",
        }}
      >
        Not Found 404
      </h1>
    </>
  );
};

export default Error;
