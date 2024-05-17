import iconDone from '../../assets/icons/icon_done';
import './TestCard.scss';

export default function TestCard() {
  return (
    <div className="Test">
      <div className="Test-title">QA Manual</div>
      <div className="Test-result">
        <div className="Bar">
          <div className="Bar-fill" />
          <div className="Bar-procent">30%</div>
          <div className="Bar-done">{iconDone}</div>
        </div>
        <div className="Test-result--date">тест от 4 января</div>
      </div>
      <div className="Test-message">
        <div>Rare.</div>
        <div>Это только начало пути!</div>
        <div>Прожарь свои знания с нами.</div>
      </div>
    </div>
  );
}
