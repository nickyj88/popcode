import React from 'react';
import classnames from 'classnames';

function LibraryPickerItem(props) {
  const unicodeCheckMark = '\u2713';
  const libraryNameLine = props.enabled ? `${unicodeCheckMark} ${props.library.name}` : props.library.name
  return (
    <div
      className={classnames(
        'dashboard__menu-item',
        {'dashboard__menu-item_active': props.enabled},
      )} onClick={props.onLibraryToggled}
    >
     {libraryNameLine}
    </div>
  );
}

LibraryPickerItem.propTypes = {
  enabled: React.PropTypes.bool.isRequired,
  library: React.PropTypes.object.isRequired,
  onLibraryToggled: React.PropTypes.func.isRequired,
};

export default LibraryPickerItem;
