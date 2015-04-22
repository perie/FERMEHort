<?php

namespace XP\TeamBundle\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use XP\TeamBundle\Entity;

/**
 * Class AdminTeamController
 * @package XP\TeamBundle\Controller\Admin
 * @Route("/team")
 *
 */

class AdminTeamController extends Controller
{
    /**
     * @Route("/", name="_admin_team_list")
     * @Template()
     */
    public function listAction()
    {
        $em = $this->getDoctrine()->getRepository("XPTeamBundle:Team");

        $teams = $em->findAll();

        return array('teams' => $teams);
    }

    /**
     * @Route("/show/{id}", name="_admin_team_show")
     * @Template()
     */
    public function showAction(Team $team)
    {
        return array('team' => $team);
    }

    public function persistAction(Team $team) {

    }
}
