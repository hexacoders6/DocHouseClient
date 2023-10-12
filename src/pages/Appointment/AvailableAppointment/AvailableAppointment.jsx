import { format } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PPP')

    const { data: availableAppointment = [], refetch } = useQuery({
        queryKey: ['availableAppointment', date],
        queryFn: async () => {
            const res = await fetch(`...?date=${date}`)
            const data = await res.json()
            return data;
        }
    });

    return (
        <section className='my-12'>
            <div className='text-center'>
                <p className='text-secondary font-semibold text-2xl'>Available Service on {format(selectedDate, 'PPP')}.</p>
                <p className='text-accent font-medium opacity-60 text-xl mt-3'>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    availableAppointment.map(availableTime => <AvailableOption
                        key={availableTime._id}
                        availableTime={availableTime}
                        setTreatment={setTreatment}
                    ></AvailableOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;