<?php

namespace XP\TeamBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Member
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="XP\TeamBundle\Entity\MemberRepository")
 */
class Member
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="memberName", type="string", length=255)
     */
    private $memberName;

    /**
     * @var string
     *
     * @ORM\Column(name="sex", type="string", length=3)
     */
    private $sex;

    /**
     * @var string
     *
     * @ORM\Column(name="memberFirstName", type="string", length=255)
     */
    private $memberFirstName;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="birthDate", type="date", nullable=true)
     */
    private $birthDate;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=255, nullable=true)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="fonction", type="string", length=255, nullable=true)
     */
    private $fonction;

    /**
     * @var string
     *
     * @ORM\Column(name="descriptions", type="string", length=255, nullable=true)
     */
    private $descriptions;

    /**
     * @var Team[]
     *
     * @ORM\ManyToMany(targetEntity="Team", cascade={"persist"})
     */
    private $teams;

    /**
     * @var MemberAvatar
     *
     * @ORM\OneToOne(targetEntity="MemberAvatar", cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $avatar;

    /**
     * @var SocialInformation []
     *
     * @ORM\OneToMany(targetEntity="SocialInformation", mappedBy="member")
     * @ORM\JoinColumn(nullable=true)
     */
    private $socials;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set memberName
     *
     * @param string $memberName
     * @return Member
     */
    public function setMemberName($memberName)
    {
        $this->memberName = $memberName;

        return $this;
    }

    /**
     * Get memberName
     *
     * @return string 
     */
    public function getMemberName()
    {
        return $this->memberName;
    }

    /**
     * Set memberFirstName
     *
     * @param string $memberFirstName
     * @return Member
     */
    public function setMemberFirstName($memberFirstName)
    {
        $this->memberFirstName = $memberFirstName;

        return $this;
    }

    /**
     * Get memberFirstName
     *
     * @return string 
     */
    public function getMemberFirstName()
    {
        return $this->memberFirstName;
    }

    /**
     * Set birthDate
     *
     * @param \DateTime $birthDate
     * @return Member
     */
    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    /**
     * Get birthDate
     *
     * @return \DateTime 
     */
    public function getBirthDate()
    {
        return $this->birthDate;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Member
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set login
     *
     * @param string $login
     * @return Member
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login
     *
     * @return string 
     */
    public function getLogin()
    {
        return $this->login;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->teams = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add teams
     *
     * @param \XP\TeamBundle\Entity\Team $teams
     * @return Member
     */
    public function addTeam(\XP\TeamBundle\Entity\Team $teams)
    {
        $this->teams[] = $teams;

        return $this;
    }

    /**
     * Remove teams
     *
     * @param \XP\TeamBundle\Entity\Team $teams
     */
    public function removeTeam(\XP\TeamBundle\Entity\Team $teams)
    {
        $this->teams->removeElement($teams);
    }

    /**
     * Get teams
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getTeams()
    {
        return $this->teams;
    }

    public function getCompleteName() {
        return $this->memberName." ".$this->memberFirstName;
    }

    /**
     * Set fonction
     *
     * @param string $fonction
     * @return Member
     */
    public function setFonction($fonction)
    {
        $this->fonction = $fonction;

        return $this;
    }

    /**
     * Get fonction
     *
     * @return string 
     */
    public function getFonction()
    {
        return $this->fonction;
    }

    /**
     * Set descriptions
     *
     * @param string $descriptions
     * @return Member
     */
    public function setDescriptions($descriptions)
    {
        $this->descriptions = $descriptions;

        return $this;
    }

    /**
     * Get descriptions
     *
     * @return string 
     */
    public function getDescriptions()
    {
        return $this->descriptions;
    }

    /**
     * Set avatar
     *
     * @param \XP\TeamBundle\Entity\MemberAvatar $avatar
     * @return Member
     */
    public function setAvatar(MemberAvatar $avatar = null)
    {
        $this->avatar = $avatar;

        return $this;
    }

    /**
     * Get avatar
     *
     * @return \XP\TeamBundle\Entity\MemberAvatar 
     */
    public function getAvatar()
    {
        return $this->avatar;
    }

    /**
     * Set sex
     *
     * @param string $sex
     * @return Member
     */
    public function setSex($sex)
    {
        $this->sex = $sex;

        return $this;
    }

    /**
     * Get sex
     *
     * @return string 
     */
    public function getSex()
    {
        return $this->sex;
    }

    /**
     * Set socials
     *
     * @param \XP\TeamBundle\Entity\SocialInformation $socials
     * @return Member
     */
    public function setSocials(\XP\TeamBundle\Entity\SocialInformation $socials = null)
    {
        $this->socials = $socials;

        return $this;
    }

    /**
     * Get socials
     *
     * @return \XP\TeamBundle\Entity\SocialInformation 
     */
    public function getSocials()
    {
        return $this->socials;
    }

    /**
     * Add socials
     *
     * @param \XP\TeamBundle\Entity\SocialInformation $socials
     * @return Member
     */
    public function addSocial(\XP\TeamBundle\Entity\SocialInformation $socials)
    {
        $this->socials[] = $socials;

        return $this;
    }

    /**
     * Remove socials
     *
     * @param \XP\TeamBundle\Entity\SocialInformation $socials
     */
    public function removeSocial(\XP\TeamBundle\Entity\SocialInformation $socials)
    {
        $this->socials->removeElement($socials);
    }
}
