import React, { memo } from 'react';

/* Si el componente solo en ocasiones cambia o modifica los props se puede usar el React.memo() y su rendimiento sera muy bueno. 

Ya que si el componente se utilizan props que constantemente están cambiando, no utilizar React.memo(), ya que de igual manera tendrá que realizar el renderizado ya que los props cambiaron.*/
export const Small = memo(({value}) => {
    console.log('Me volví a mostrar');

    return (
        <small>{ value }</small>
    );
});