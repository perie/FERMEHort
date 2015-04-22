<?php

namespace XP\TeamBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SocialInformation
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="XP\TeamBundle\Entity\SocialInformationRepository")
 */
class SocialInformation
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="value", type="string", length=255)
     */
    private $value;

    /**
     * @var Member
     *
     * @ORM\ManyToOne(targetEntity="Member", inversedBy="socials")
     * @ORM\JoinColumn(nullable=true)
     */
    private $member;


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
     * Set name
     *
     * @param string $name
     * @return SocialInformation
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set value
     *
     * @param string $value
     * @return SocialInformation
     */
    public function setValue($value)
    {
        $this->value = $value;

        return $this;
    }

    /**
     * Get value
     *
     * @return string 
     */
    public function getValue()
    {
        return $this->value;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->member = new \Doctrine\Common\Collections\ArrayCollection();
    }
    

    /**
     * Add member
     *
     * @param \XP\TeamBundle\Entity\Member $member
     * @return SocialInformation
     */
    public function addMember(\XP\TeamBundle\Entity\Member $member)
    {
        $this->member[] = $member;

        return $this;
    }

    /**
     * Remove member
     *
     * @param \XP\TeamBundle\Entity\Member $member
     */
    public function removeMember(\XP\TeamBundle\Entity\Member $member)
    {
        $this->member->removeElement($member);
    }

    /**
     * Get member
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getMember()
    {
        return $this->member;
    }
}