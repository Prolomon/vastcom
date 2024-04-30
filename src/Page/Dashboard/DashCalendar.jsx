import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const DashCalendar = () => {

    return (
        <section className='rounded-2xl bg-white shadow-2xl h-[19.5rem] dark:bg-slate-800 dark:border border-slate-500 text-gray-800  dark:text-gray-400'>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar className='text-gray-800  dark:text-gray-400' />
            </LocalizationProvider>
        </section>
    )
}

export default DashCalendar