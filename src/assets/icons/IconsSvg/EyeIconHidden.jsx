import React from 'react';
const EyeIconHidden = ({ onClick, passwordError, emailError }) => {
  return (
    <svg
      onClick={onClick}
      className={
        'eye-icon' + (emailError && passwordError ? ' both-error-icon' : '')
      }
      width="16"
      height="16"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.1813 8.14905C4.50457 7.96132 3.34355 6.33893 3.74526 4.66902L6.1813 8.14905ZM6.50001 8.83366C4.36343 8.83366 2.49809 7.69405 1.50001 6.00033C1.95324 5.23122 2.58543 4.57654 3.34051 4.09079L2.76674 3.27114C1.89586 3.83854 1.16503 4.5991 0.638468 5.49264C0.547812 5.64647 0.5 5.82178 0.5 6.00034C0.5 6.1789 0.547812 6.3542 0.638468 6.50803C1.81259 8.50045 4.00293 9.83365 6.50001 9.83365C6.77608 9.83367 7.0519 9.8172 7.32601 9.78434L6.6589 8.83134C6.60595 8.83282 6.55298 8.8336 6.50001 8.83366ZM12.3615 6.50801C11.6692 7.68289 10.6236 8.62763 9.37084 9.20576L10.3733 10.6378C10.4524 10.7509 10.4249 10.9068 10.3118 10.986L9.8798 11.2884C9.7667 11.3676 9.6108 11.3401 9.53163 11.227L2.62676 1.36281C2.54757 1.24971 2.57509 1.09381 2.6882 1.01465L3.12022 0.712209C3.23332 0.633021 3.38922 0.660542 3.46838 0.773646L4.62517 2.42625C5.22109 2.25748 5.85017 2.167 6.50001 2.167C8.99709 2.167 11.1874 3.5002 12.3615 5.49264C12.4522 5.64647 12.5 5.82177 12.5 6.00033C12.5 6.17888 12.4522 6.35418 12.3615 6.50801ZM11.5 6.00033C10.5801 4.43922 8.9234 3.34887 6.99663 3.18768C6.79255 3.39779 6.66667 3.68429 6.66667 4.00033C6.66667 4.64466 7.18901 5.16699 7.83334 5.16699C8.47767 5.16699 9.00001 4.64466 9.00001 4.00033L8.99999 3.99945C9.63815 5.19272 9.34872 6.7132 8.23065 7.57693L8.7868 8.37141C9.92972 7.8868 10.8814 7.05003 11.5 6.00033Z"
        fill="#A9A9A9"
      />
    </svg>
  );
};
export default EyeIconHidden;