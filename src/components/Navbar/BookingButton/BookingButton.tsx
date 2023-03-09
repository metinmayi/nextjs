import { FaCalendarDay } from "react-icons/fa";
export default function BookingButton() {
  return (
    <div className="flex flex-col items-center justify-center grow">
      <FaCalendarDay size="35" />
      <p>Boka</p>
    </div>
  );
}
