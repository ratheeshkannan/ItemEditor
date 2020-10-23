import React from "react";
import PropTypes from 'prop-types';
import { Button } from "../../common/Button";
import "./ActionButtons.css";

export const ActionButtons = React.memo((props) => {
  return (
    <section className="ActionButtons">
      <Button settings={props.settings.primary} className="button"/>
      <Button settings={props.settings.secondary} className="button"/>
    </section>
  );
});

ActionButtons.propTypes = {
    settings: PropTypes.object,
}
