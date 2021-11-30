import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  header: {
    position: "sticky",
    top: 0,
    marginTop: -8,
    backgroundColor: "white",
    zIndex: 2,
  },
  text: {
    marginBottom: "5px",
    padding: "5px 10px",
    cursor: "default",
  },
  card: {
    width: "100%",
  },
});

export const menuPaperProps = {
  style: {
    maxHeight: 55 * 4.5,
    width: "60ch",
  },
  sx: {
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 0,
    ml: -11,
  },
}