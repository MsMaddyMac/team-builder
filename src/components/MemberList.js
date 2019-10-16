import React from "react";


const MemberList = props => {
    return (
        <div className="member-list">
            {props.memberList.map((members, index) => {
                return (
                    <div className="members" key={index}>
                        <h2>{members.name}</h2>
                        <h3>{members.email}</h3>
                        <h3>{members.role}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default MemberList;