import P_Description from "./P-description";
export default function SectionTitle({ title, description }) {
  return (
    <div className="Section-title">
      <h2>{title}</h2>
      <P_Description content={description} />
    </div>
  );
}
