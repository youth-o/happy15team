import Button from "@/components/Buttons/Button";
import { DashboardInvitation } from "@/types/interface";
import styles from "./InviteList.module.css";

interface InviteListProps {
  invitations: DashboardInvitation[] | undefined;
  handleDeleteButtonClick: (invitationId: number) => void;
}

function InviteList({ invitations, handleDeleteButtonClick }: InviteListProps) {
  return (
    <div>
      {invitations?.map((invitation, index) => (
        <div key={index}>
          <div className={styles.innerContainer}>
            <span>{invitation.invitee.email}</span>

            <Button
              variant="secondary"
              type="button"
              customStyles={styles.cancelButton}
              onClick={() => handleDeleteButtonClick(invitation.id)}
            >
              취소
            </Button>
          </div>
          {index !== invitations.length - 1 && (
            <svg width="100%" height="1" className={styles.line}>
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default InviteList;
