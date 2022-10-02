import { FC } from 'react';
import { useParams } from 'react-router-dom';

const Slice: FC = () => {
    const navigate = useParams();

    return (
        <div>
            {navigate.slice}
        </div>
    );
};

export default Slice;