import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postIMGRequest} from '../redux/editor';

import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'


const myTheme = {
    // Theme object to extends default dark theme.
  };
const Editor = (props) => {
    const [image,setImage] = useState(null);

    useEffect(() => {
       
    }, []);

    return (
        <form className="container">
            <div className="card">
            <ImageEditor
    includeUI={{
      loadImage: {
        path: 'img/sampleImage.jpg',
        name: 'SampleImage'
      },
      theme: myTheme,
      menu: ['shape', 'filter'],
      initMenu: 'filter',
      uiSize: {
        width: '1000px',
        height: '700px'
      },
      menuBarPosition: 'bottom'
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70
    }}
    usageStatistics={true}
  />
               
            </div>
        </form>
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    postIMG: postIMGRequest
}, dispatch);

export default connect(null, mapDispatchToProps)(Editor);