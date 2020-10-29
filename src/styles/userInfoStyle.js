import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  userInfo: {
    padding: "10px 15px",
  },
  headingName: {
    fontWeight: "bold",
    margin: "18px 0",
  },
  userImage: { width: "160px", borderRadius: "50%" },
  description: { fontSize: "14px", margin: "20px 0" },
});

export { useStyles };
