import { FormControl } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppStateContext, ViewMode } from '../../App';
import AddEndpoint from '../add-endpoint/AddEndpoint';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const viewModeOptions: Record<ViewMode, string> = {
  panels: 'Panels view',
  tabs: 'Tabs view',
  board: 'Board view',
};

export default function Header() {
  const classes = useStyles();
  const { viewMode, changeViewMode } = useContext(AppStateContext);
  const inputLabel = useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Moxy Proxy
          </Typography>
          <FormControl
            style={{
              margin: 8,
              minWidth: 120,
            }}
            variant="outlined"
          >
            <InputLabel id="demo-simple-select-outlined-label" ref={inputLabel}>
              View mode
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              labelId="demo-simple-select-outlined-label"
              labelWidth={labelWidth}
              value={viewMode}
              onChange={event => {
                changeViewMode(event.target.value as ViewMode);
              }}
            >
              {Object.keys(viewModeOptions).map(key => (
                <MenuItem value={key}>{viewModeOptions[key as ViewMode]}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <AddEndpoint />
        </Toolbar>
      </AppBar>
    </div>
  );
}
