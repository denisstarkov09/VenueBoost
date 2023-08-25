import React, { useState, useEffect } from 'react';
import { Input, Modal } from 'antd';
import { NotificationManager } from "react-notifications";
import FormTextInput from '../../../components/FormTextInput';
import { addCard } from '../../../redux/actions/contactsales';

const AddCardModal = ({ restaurant_id, showModal, onClose, onCardSaved }) => {
    const [open, setOpen] = useState(false);
    const [card_num, setNum] = useState('');
    const [name, setName] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiry_month, setExpiryMonth] = useState('');
    const [expiry_year, setExpiryYear] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setOpen(showModal);
    }, [showModal]);

    const inputExpiry = (value) => {
        value = value.replace('/', '');
        if (value.length > 4) {
            return;
        }
        setExpiryMonth(value.slice(0, 2));
        setExpiryYear(value.slice(2, 4));
    };

    const formatCardNum = (num) => {
        let formatted = '';
        for (var i = 0; i < num.length; i++) {
            if (i !== 0 && i % 4 === 0) {
                formatted = formatted + ' ';
            }
            formatted = formatted + num[i];
        }
        return formatted;
    };

    const validateCard = () => {
        if (name == '') {
            NotificationManager.info('Please enter a cardholder name', 'Info', 3000);
            return false;
        }
        if (card_num.length != 16) {
            NotificationManager.info('Please enter valid card number', 'Info', 3000);
            return false;
        }
        if (cvv.length != 3) {
            NotificationManager.info('Please enter valid cvv', 'Info', 3000);
            return false;
        }

        let year = parseInt(expiry_year);
        let month = parseInt(expiry_month);

        let this_year = new Date().getFullYear() - 2000;
        let this_month = new Date().getMonth() + 1;

        if (year < this_year || month <= 0 || month > 12) {
            NotificationManager.info('Please enter valid expiry date', 'Info', 3000);
            return false;
        }
        if (year == this_year && month < this_month) {
            NotificationManager.info('Please enter valid expiry date', 'Info', 3000);
            return false;
        }
        return true;
    };

    const onSaveCard = () => {
        if (validateCard() == false) {
            return;
        }
        setLoading(true);
        addCard({
            restaurant_id: restaurant_id,
            name: name,
            number: '' + card_num,
            cvc: '' + cvv,
            exp_month: '' + expiry_month,
            exp_year: '' + expiry_year
        })
            .then((data) => {
                setLoading(false);
                console.log('onSaveCard', data.payment_method);
                onClose();
                onCardSaved(data.payment_method);
            })
            .catch((error) => {
                setLoading(false);
                console.log('onSaveCard error', error);
                const message = error.message || 'Something went wrong!';
                NotificationManager.error(message, 'Info', 3000);
            });
    };

    return (
        <Modal
            title="Add a New Card"
            centered
            open={open}
            onCancel={onClose}
            confirmLoading={loading}
            onOk={onSaveCard}
            maskClosable={false}
            okText={'Save'}
            okButtonProps={{ style: { backgroundColor: '#23cbd8' }, disabled: (loading || name === '' || card_num === '' || cvv === '' || expiry_month === '' || expiry_year === '') }}
        >
            <div className={'flex flex-col justify-center items-center py-4 w-full '}>
                <div className='grid  grid-cols-1 w-full flex-col gap-3 '>
                    <Input
                        placeholder='Card Number'
                        value={card_num}
                        onChange={(e) => {
                            if (e.target.value.length <= 16) {
                                setNum(e.target.value);
                            }
                        }}
                    />
                    <Input
                        placeholder='Card Holder Name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <div className='grid md:grid-cols-2 grid-cols-1 flex-col gap-3 md:gap-6'>
                        <Input
                            placeholder='Expire Date'
                            value={(expiry_month !== '' || expiry_year !== '') ? expiry_month + (expiry_year == '' ? '' : ('/' + expiry_year)) : ''}
                            onChange={(e) => { inputExpiry(e.target.value) }}
                        />
                        <Input
                            placeholder='CVV'
                            value={cvv}
                            onChange={(e) => {
                                if (e.target.value.length <= 3) {
                                    setCvv(e.target.value);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AddCardModal;
