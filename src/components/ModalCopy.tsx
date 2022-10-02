import { FC, useEffect, useRef, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

interface Image {
    alt: string
    url: string
    width: number
    height: number
}

interface IProps {
    isOpened: { open: boolean, openAt: number }
    close: () => void
    images: Image[]
}

const Modal: FC<IProps> = (props) => {
    const ref = useRef(null);
    const ref2: any = useRef(null);

    const [step, setStep] = useState({ num: 0, width: 0, totalWidth: 0 });

    useEffect(()=> {
        const modal: any = ref.current;
        if(!modal) return;
        if(!props.isOpened.open) {
            modal.removeAttribute('opened');
            return;
        };

        modal.setAttribute('opened', '');
    }, [props.isOpened, ref.current]);

    useEffect(() => {
        const modal: any = ref2.current;
        if(!modal) return;
        if(!props.isOpened.open) {
            setStep({ num: 0, width: 0, totalWidth: 0 });
        }

        const viewAreaHeight: number = modal.clientHeight;
        const width = props.images[props.isOpened.openAt].width * viewAreaHeight / props.images[props.isOpened.openAt].height;
        const totalWidth = props.images.map((img, i) => {
            if(i >= props.isOpened.openAt) {
                return 0;
            }
            return img.width * viewAreaHeight / img.height;
        }).reduce((previousValue, currentValue) => {
            return previousValue + currentValue 
        }, 0);
        
        setStep(prev => {return { 
            num: props.isOpened.openAt, 
            width: width,
            totalWidth: totalWidth
        }});
    }, [props.isOpened, ref2.current]);

    const handleNextSlide = () => {
        const modal: any = ref2.current;
        const viewAreaHeight: number = modal.clientHeight;
        setStep(prev => {return { 
            num: prev.num + 1, 
            width: props.images[prev.num + 1].width * viewAreaHeight / props.images[prev.num + 1].height,
            totalWidth: prev.totalWidth + prev.width
        }});
    };

    const handlePrevSlide = () => {
        const modal: any = ref2.current;
        const viewAreaHeight: number = modal.clientHeight;
        setStep(prev => {return { 
            num: prev.num - 1, 
            width: props.images[prev.num - 1].width * viewAreaHeight / props.images[prev.num - 1].height,
            totalWidth: prev.totalWidth - props.images[prev.num - 1].width * viewAreaHeight / props.images[prev.num - 1].height
        }});
    };

    useEffect(() => {
        console.log(step);
    }, [step])

    return (
        <div ref={ref} className='modal'>
            <div className='carusel__container'>
                <div ref={ref2} className='visible__area' style={{ width: step.width }}>
                    <div className='image__row' style={{ transform: `translateX(-${step.totalWidth}px)`}}>
                        {props.images.map((img, i) => {
                            return (
                                <div key={i}>
                                    <img src={img.url} alt={img.alt} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='modal__buttons'>
                    <button onClick={handlePrevSlide} disabled={step.num === 0}><BsFillArrowLeftCircleFill /></button>
                    <button onClick={handleNextSlide} disabled={step.num === props.images.length - 1}><BsFillArrowRightCircleFill /></button>
                </div>
            </div>
            <button className='modal__close' onClick={props.close}><VscChromeClose /></button>
        </div>
    );
};

export default Modal;