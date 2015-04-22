<?php

namespace XP\TeamBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use XP\TeamBundle\Entity;

/**
 * Class TeamController
 * @package XP\TeamBundle\Controller
 * @Route("/team")
 *
 */

class TeamController extends Controller
{
    /**
     * @Route("/", name="_front_team_list")
     * @Template()
     */
    public function frontAction()
    {
        $em = $this->getDoctrine()->getRepository("XPTeamBundle:Team");

        $teams = $em->findAll();

        return array('teams' => $teams);
    }

    public function persistAction(Team $team) {

    }
}
