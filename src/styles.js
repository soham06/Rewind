import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '25px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'black',
        fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif' 
      },
      appBar_2: {
        borderRadius: 10,
        marginTop: '10px',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      appBar_3: {
        borderRadius: 10,
        marginTop: '30px',
        marginBottom: '25px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading_2: {
        color: 'black',
        fontFamily: 'Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif' 
      },
      image: {
        marginLeft: '20px',
      },
      image_2: {
        marginRight: '20px',
      }
}));