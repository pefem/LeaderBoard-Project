//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LeaderBoard.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class RoleClaim
    {
        public string RoleClaimID { get; set; }
        public string RoleID { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    
        public virtual Role Role { get; set; }
    }
}
