import React, { useEffect } from 'react'
import MemeFormUnconnected from './MemeForm'
import {connect, useSelector, useDispatch} from 'react-redux'
import { updateCurrent } from '../../../store/current'
interface IConnectedMemeFormProps {
    style?: object
  }
   const MemeForm: React.FC<IConnectedMemeFormProps> = (props) => {
    const dispatch = useDispatch();
    /*const datas = useSelector((storeState: any) => {
      return { images: storeState.ressources.images, meme: storeState.current }
    })*/
    const images = useSelector((s: any) => s.ressources.images)
    const meme = useSelector((s: any) => s.current)
    useEffect(() => {
      
    }, [images,dispatch])
    return (
      <MemeFormUnconnected {...props} meme={meme} images={images} onMemeChange={(meme: MemeInterface) => {
        dispatch(updateCurrent(meme));
      }} />
    );
  }
  export default MemeForm;
  /*
  function mapStateToProps(state: any, owprops: any) {
    return {
      ...owprops,
      images: state.ressources.images,
      meme: state.current
    }
  }
  function mapDispatchToProps(dispatch: Function) {
    return {
      onMemeChange: (meme: MemeInterface) => {
        dispatch(updateCurrent(meme))
      }
    }
  }
  export const ConnectedMemeForm=connect(mapStateToProps,mapDispatchToProps)(MemeForm)*/