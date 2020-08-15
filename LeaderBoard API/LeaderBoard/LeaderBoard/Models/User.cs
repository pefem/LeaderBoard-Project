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
    
    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            this.UserClaims = new HashSet<UserClaim>();
            this.UserLogins = new HashSet<UserLogin>();
            this.UserTokens = new HashSet<UserToken>();
            this.Roles = new HashSet<Role>();
        }
    
        public string UserID { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public Nullable<bool> EmailConfirmed { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string SecurityStamp { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string PhoneNumber { get; set; }
        public Nullable<bool> PhoneNumberConfirmed { get; set; }
        public Nullable<bool> TwoFactorEnabled { get; set; }
        public Nullable<System.DateTimeOffset> LockoutEnd { get; set; }
        public Nullable<bool> LockoutEnabled { get; set; }
        public Nullable<int> AccessFailedCount { get; set; }
        public string SocialAccount { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserClaim> UserClaims { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserLogin> UserLogins { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserToken> UserTokens { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Role> Roles { get; set; }
    }
}